import http.server, socketserver, os, sys

PORT = 3000
DIRECTORY = os.path.join(os.path.dirname(__file__), 'dist')

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        req_path = self.translate_path(self.path)
        if not os.path.exists(req_path) or os.path.isdir(req_path):
            if os.path.isdir(req_path) and os.path.exists(os.path.join(req_path, 'index.html')):
                return super().do_GET()
            self.path = '/index.html'
        return super().do_GET()

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    print(f'Starting Navita Tuitions SPA Server on http://localhost:{PORT}...', flush=True)
    with socketserver.TCPServer(('0.0.0.0', PORT), SPAHandler) as httpd:
        print(f'Server running on http://localhost:{PORT} and http://127.0.0.1:{PORT}.', flush=True)
        httpd.serve_forever()
