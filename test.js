function switchiroo(input, b, c) {
  console.log(b);
  switch (input) {
    case 1:
      console.log("case 1!");
      --b;
      i = i + 1;
      break;
    case 2:
      console.log("case 2!");
      b++;
      i = i + 1;
      break;
    default:
      i = i + 1;
      break;
  }
  return b;
}

for (i = 0; i < 3; ) {
  let b = 12;
  let c = 51;
  b = switchiroo(i, b, c);
  console.log(b, i);
}
