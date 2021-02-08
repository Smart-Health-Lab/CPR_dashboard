from flask import Flask, request
from flask_socketio import SocketIO, send


app = Flask(__name__)

app.config['SECRET_KEY'] = 'cpr_dashboard_secret'

app.debug = True

app.host = '0.0.0.0'


socket_io = SocketIO(app, cors_allowed_origins="*")
# socket_io = SocketIO(app,)


@socket_io.on("message")
def handleMessage(msg):
    print(msg)
    send(msg, broadcast=True)
    return None


if __name__ == '__main__':
    socket_io.run(app)
