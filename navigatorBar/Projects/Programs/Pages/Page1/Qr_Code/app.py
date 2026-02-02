from flask import Flask, render_template, send_file
import qrcode
import io

app = Flask(__name__)

QR_LINK = "https://testflight.apple.com/join/BWwAexN9"

@app.route("/")
def index():
    return render_template("QR.html")

@app.route("/qr")
def qr():
    img = qrcode.make(QR_LINK)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return send_file(buf, mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)
