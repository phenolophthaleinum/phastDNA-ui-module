import flask
import time
import subprocess


app = flask.Flask(__name__, template_folder=".")


@app.route('/')
def index():
    return flask.render_template('index.html')


@app.route("/", methods=['POST'])
def test_f():
    # req_data = flask.request.get_json(force=True)
    data = flask.request.form
    print("Run test_f")
    # time.sleep(3)
    # cmd = subprocess.Popen(['ping', 'google.com', '-t'], shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    # stdout, error = cmd.communicate()
    # for line in cmd.stdout:
    #     print(line)
    print(data)
    return flask.render_template('index.html')
    # return subprocess.check_output(['ping', 'google.com', '-t'])


if __name__ == '__main__':
    app.run(debug=True)