import flask
import time
import subprocess
import mmap
import datetime


app = flask.Flask(__name__, template_folder=".")

current_task_file = ''
ptrs = {}
# tasks = {}

@app.route('/')
def index():
    return flask.render_template('index.html')


@app.route("/task", methods=['GET', 'POST'])
def test_f():
    if flask.request.method == 'POST':
        # req_data = flask.request.get_json(force=True)
        data = flask.request.form
        name_prefix = "train" if 'loss' in data else "predict"
        task_name = f'{name_prefix}_{datetime.datetime.now():%Y_%m_%d_%H_%M_%S%z}'
        global current_task_file 
        global ptr
        current_task_file = task_name
        ptr = 0
        # tasks[task_name] = {}
        print(task_name)
        print("Run test_f")
        # time.sleep(3)
        # cmd = subprocess.Popen(['ping', 'google.com', '-t'], shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        # cmd = subprocess.Popen(['ping', 'google.com', '-t'], shell=True)
        # stdout, error = cmd.communicate()
        # for line in cmd.stdout:
        #     print(line)
        cmd = subprocess.Popen(['python', 'dummyscript.py', '-l', task_name])
        print(data)
        return flask.render_template('task.html', task_name=task_name)
        # return subprocess.check_output(['ping', 'google.com', '-t'])


@app.route("/test/<id>")
def get_status(id):
    # global ptr
    print(ptrs)
    if id not in ptrs:
        ptrs[id] = 0
    ptr = ptrs[id]
    status = 1
    with open(f"{id}.log", "r+b") as f:
        mm = mmap.mmap(f.fileno(), 0)

        if ptr == 0:
            logs = str(mm[::], 'utf-8')
            ptr = len(mm)
            ptrs[id] = ptr
            return flask.jsonify({'content': logs, 'status': status})

        logs = str(mm[ptr:], 'utf-8')
        ptr = len(mm)
        
        if 'finished' in logs[-50:]:
            status = 0
            
        ptrs[id] = ptr
    return flask.jsonify({'content': logs, 'status': status})


if __name__ == '__main__':
    app.run(debug=True)