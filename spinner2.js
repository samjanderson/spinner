let spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '  ]

  let timeOut = 100
  for (const char of spin) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeOut += 200)
  }

  setTimeout(() => {
    console.log('\n');
  }, timeOut);

