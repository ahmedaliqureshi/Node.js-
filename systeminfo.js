// 1st we are going to import system information 
// and we are going to import chalk 
// import os from "os"; 
// import chalk from "chalk";

// 2nd we are going to make a function in which are goging to write
// all the information of the system in the colour
// but also we are going to use the asyn method becuase it will use 
// execute the line by line 
// console.log(chalk.cyan.bold("\n ===============SYSTEM INFO=======\n"));

// async function systeminformation(){
//     const osversion =  os.version(); 
//     const cpu = await os.cpus(); 
//     const mem = await os.totalmem(); 
//     const network = await os.networkInterfaces(); 
//     const uptime = await  os.uptime();

//     console.log(chalk.yellow.bold("platform:"),os.platform); 
//     console.log(chalk.yellow.bold("OS types:"),os.type); 
//     console.log(chalk.yellow.bold("Release:"),os.release); 
//     console.log(chalk.yellow.bold("Architecture:"),os.arch); 
//     console.log(chalk.yellow.bold("Haostname:"),os.hostname,"\n");

//   console.log(chalk.red.bold("CPU Info"));
//   console.log("Cores:", cpu.cores);
//   console.log("Model:", cpu.manufacturer, cpu.brand, "\n");

//   console.log(chalk.green.bold("Memory Info"));
//   console.log("Total Memory:", (mem.total / 1e9).toFixed(2), "GB");
//   console.log("Free Memory:", (mem.free / 1e9).toFixed(2), "GB\n");

//   // console.log(chalk.blue.bold("Network Interfaces"));
//   // network.forEach(n => {
//   //   console.log(`${n.iface} (${n.type}): ${n.ip4}`);
//   // });

//   console.log("\n" + chalk.magenta.bold("Uptime (Seconds):"), uptime.uptime);
//   console.log(chalk.green.bold("\nSystem Info Retrieved Successfully!"));
// }

//  systeminformation();

// system-info.js
// Run with: node system-info.js

import os from "os"; 
import chalk from "chalk";

function getSystemInfo() {
  console.log("=== SYSTEM INFORMATION ===\n");

  // 1. Basic OS info (using os module)
  console.log(`Operating System   : ${os.type()} (${os.platform()})`);
  console.log(`OS Release         : ${os.release()}`);
  console.log(`Architecture       : ${os.arch()}`);
  console.log(`Computer Name      : ${os.hostname()}`);
  console.log(`User               : ${os.userInfo().username}`);
  console.log(`Home Directory     : ${os.homedir()}`);

  // 2. CPU Info
  console.log(`CPU Cores          : ${os.cpus().length}`);
  console.log(`CPU Model          : ${os.cpus()[0].model.trim()}`);

  // 3. Memory Info
  const totalMem = (os.totalmem() / 1024**3).toFixed(2);
  const freeMem = (os.freemem() / 1024**3).toFixed(2);
  const usedMem = (totalMem - freeMem).toFixed(2);
  console.log(`Total RAM          : ${totalMem} GB`);
  console.log(`Free RAM           : ${freeMem} GB`);
  console.log(`Used RAM           : ${usedMem} GB`);

  // 4. Uptime
  const uptimeSeconds = os.uptime();
  const uptimeHours = (uptimeSeconds / 3600).toFixed(2);
  console.log(`System Uptime      : ${uptimeHours} hours`);

  // 5. Advanced info using child_process (real commands)
  console.log("\n--- Detailed Info via Commands ---\n");

  // Works on Linux/macOS
  if (os.platform() !== 'win32') {
    exec('uname -a', (err, stdout) => {
      if (!err) console.log(`Full Kernel        : ${stdout.trim()}`);
    });

    exec('cat /proc/cpuinfo | grep "model name" | head -1', (err, stdout) => {
      if (!err) console.log(`CPU Detailed       : ${stdout.replace('model name\t:', '').trim()}`);
    });

    exec('df -h / | tail -1', (err, stdout) => {
      if (!err) console.log(`Root Disk Usage    : ${stdout.trim()}`);
    });

    exec('whoami', (err, stdout) => {
      if (!err) console.log(`Current User       : ${stdout.trim()}`);
    });
  }

  // Windows support
  if (os.platform() === 'win32') {
    exec('systeminfo | findstr /C:"OS Name" /C:"System Manufacturer" /C:"Total Physical Memory"', (err, stdout) => {
      if (!err) console.log(stdout.trim());
    });

    exec('wmic cpu get name', (err, stdout) => {
      if (!err) {
        const cpuName = stdout.split('\n')[1].trim();
        console.log(`CPU Detailed       : ${cpuName}`);
      }
    });
  }

  // Network Interfaces (using os + child_process)
  console.log(`\nNetwork Interfaces :`);
  const nets = os.networkInterfaces();
  Object.keys(nets).forEach((iface) => {
    nets[iface].forEach((details) => {
      if (!details.internal) {
        console.log(`  ${iface} -> ${details.address} (${details.family})`);
      }
    });
  });
}

// Run the function
getSystemInfo();
