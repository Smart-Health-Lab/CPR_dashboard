from flask import Flask, request
from flask_socketio import SocketIO, send
from flask_cors import CORS


app = Flask(__name__)

app.config['SECRET_KEY'] = 'cpr_dashboard_secret'

app.debug = True

app.host = 'localhost'

CORS(app)

# socketIo = SocketIO(app, cors_allowed_origins="*")
socket_io = SocketIO(app,)

@socket_io.on("message")
def handleMessage(msg):
    pring(msg)
    send(msg, broadcast=True)
    return None




if __name__ == '__main__':
    socketIo.run(app)