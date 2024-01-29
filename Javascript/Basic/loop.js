// -----------------------------------------------------
  console.log("------------ for loop ------------");
//------------------------------------------------------

/*
  for(init; condition; ++/--)
  {
    statement;
  }
*/
  console.log("\n Ascending Order Loop \n");

  for(let i=2020; i<=2025; i++)
  {
    console.log("The Year:", i);
  }

  console.log("\n Descending Order Loop \n");

  for(let i=2025; i>=2020; i--)
  {
    console.log("The Year:", i);
  }

  console.log("\n print 1 to 40 odd numbers \n");

  for(let i=1; i<40; i=i+2)
  {
    console.log("For Say:", i);
  }

  console.log("\n print 1 to 40 even numbers \n");

  for(let i=2; i<=40; i=i+2)
  {
    console.log("For Say:", i);
  }


// -----------------------------------------------------
  console.log("------------ Nested for loop ------------");
//------------------------------------------------------

  for(let i=1; i<=10; i++)
  {
    console.log(i, "Outer Loop");

    for(let j=1; j<=5; j++)
    {
      console.log(j, "Inner Loop");
    }

    console.log("----------------------");
  }

//--------------------------------------------------------

  for(let i=1; i<=10; i++)
  {
    console.log(i, "Outer Loop");

    for(let j=1; j<=i; j++)
    {
      console.log(j, "Inner Loop");
    }

    console.log("----------------------");
  }

// -----------------------------------------------------
  console.log("\n------------ Ascending Order Nested for loop ------------\n");
//------------------------------------------------------


  for(let i=1; i<=10; i++)
  {
    let temp = "";

    for(let j=1; j<=i; j++)
    {
      temp = temp + j + " ";
    }

    console.log(temp);
  }

// -----------------------------------------------------
  console.log("\n------------ Descending Order Nested for loop ------------\n");
//------------------------------------------------------

  for(let i=10; i>=1; i--)
  {
    let temp = "";

    for(let j=1; j<=i; j++)
    {
      temp = temp + j + " ";
    }

    console.log(temp);
  }


// -----------------------------------------------------
  console.log("\n------------ Do - While loop ------------\n");
//------------------------------------------------------  

  let i = 5000;

  do{
    console.log("The Do Say: ", i);
    i++;
  }
  while(i<=100);


// -----------------------------------------------------
  console.log("\n------------ In Case of While loop ------------\n");
//------------------------------------------------------  

  let j=90;

  while(j<=100)
  {
    console.log("The While Say:", j);
    j++;
  }