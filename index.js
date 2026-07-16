const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DevOps Bootcamp</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb);
    color:#fff;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px;
}

.container{
    max-width:900px;
    width:100%;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(10px);
    border-radius:20px;
    padding:50px;
    text-align:center;
    box-shadow:0 20px 40px rgba(0,0,0,.35);
}

h1{
    font-size:3rem;
    margin-bottom:15px;
}

.subtitle{
    font-size:1.2rem;
    color:#dbeafe;
    margin-bottom:40px;
}

.tools{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:15px;
    margin:35px 0;
}

.tool{
    background:#ffffff15;
    padding:18px;
    border-radius:12px;
    font-size:1.05rem;
    font-weight:bold;
    transition:.3s;
}

.tool:hover{
    background:#3b82f6;
    transform:translateY(-5px);
}

.footer{
    margin-top:35px;
    color:#cbd5e1;
    font-size:1rem;
}
</style>
</head>

<body>

<div class="container">

<h1>DevOps Beginners Bootcamp</h1>

<p class="subtitle">
Learn Modern DevOps from the Ground Up with Hands-on Projects and Real Cloud Infrastructure.
</p>

<div class="tools">

<div class="tool">🐧 Linux</div>
<div class="tool">💻 Bash</div>
<div class="tool">📜 Shell Scripting</div>
<div class="tool">☁️ Cloud Computing</div>
<div class="tool">🟠 AWS</div>
<div class="tool">🐳 Docker</div>
<div class="tool">📦 Containers</div>
<div class="tool">⚙️ Git & GitHub</div>
<div class="tool">🚀 CI/CD</div>
<div class="tool">🏗️ Terraform</div>
<div class="tool">☸️ Kubernetes</div>
<div class="tool">📊 Monitoring</div>

</div>

<p class="footer">
Build • Automate • Deploy • Scale
<br><br>
Welcome to your journey into Cloud & DevOps Engineering.
</p>

</div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});