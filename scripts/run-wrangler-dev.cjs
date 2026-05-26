const { spawn } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const requiredMajor = 22
const projectRoot = path.resolve(__dirname, '..')
const wranglerBin = path.join(
  projectRoot,
  'node_modules',
  'wrangler',
  'bin',
  'wrangler.js',
)

const nodeMajor = Number(process.versions.node.split('.')[0])
const localNode = path.join(
  process.env.USERPROFILE || '',
  'tools',
  'node-v22.16.0-win-x64',
  'node.exe',
)
const nodeBin =
  nodeMajor >= requiredMajor
    ? process.execPath
    : fs.existsSync(localNode)
      ? localNode
      : null
const forwardedArgs = process.argv.slice(2)
const wranglerArgs =
  forwardedArgs.length > 0
    ? forwardedArgs
    : ['dev', 'src/admin/worker/worker.ts', '--port', '8787']

if (!nodeBin) {
  console.error(
    'Wrangler needs Node.js 22+. Install Node 22 or run npm with a Node 22 shell.',
  )
  process.exit(1)
}

const child = spawn(
  nodeBin,
  [wranglerBin, ...wranglerArgs],
  {
    cwd: projectRoot,
    env: process.env,
    stdio: 'inherit',
  },
)

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 1)
})
