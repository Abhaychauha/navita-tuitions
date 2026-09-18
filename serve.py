import http.server, socketserver, os, sys

PORT = 3000
DIRECTORY = os.path.join(os.path.dirname(__file__), 'dist')

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        req_path = self.translate_path(self.path)
        if not os.path.exists(req_path) or os.path.isdir(req_path):
            # Check if index.html inside dir exists
            if os.path.isdir(req_path) and os.path.exists(os.path.join(req_path, 'index.html')):
                return super().do_GET()
            self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    print(f'Starting Navita Tuitions SPA Server on http://localhost:{PORT}...')
    with socketserver.TCPServer(('0.0.0.0', PORT), SPAHandler) as httpd:
        print('Server running. Press Ctrl+C to stop.')
        httpd.serve_forever()
