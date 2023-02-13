import flask
import time
import subprocess
import mmap
import datetime


app = flask.Flask(__name__, template_folder=".")

current_task_file = ''

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
        current_task_file = task_name
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

@app.route("/test")
def get_status():
    status = 1
    with open(f"{current_task_file}.log", "r+b") as f:
        mm = mmap.mmap(f.fileno(), 0)
        logs = str(mm[::], 'utf-8')
        # print(logs[-20:].find('finished'))
        if 'finished' in logs[-20:]:
            status = 0
    return flask.jsonify({'content': logs, 'status': status, 'task_name': current_task_file})


if __name__ == '__main__':
    app.run(debug=True)