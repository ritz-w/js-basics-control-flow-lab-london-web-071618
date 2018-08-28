// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!';
    }
    else if (someValue > 2000 && someValue < 2500) {
      result = 'I will gladly take your thirty bucks.';
    }
    else if (someValue > 2500) {
      result = 'No can do.';
    }
    return result;
  };


function ternaryCheckCity(city) {
  const isCity = (city === 'NYC') ? true : false;
  if (isCity === true) {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(generosity) {
  let answer;
  switch (generosity) {
    case 'generous':
    answer = "Thank you so much.";
    break;
    case 'not as generous':
    answer = "Thank you.";
    break;
    default:
    answer = 'Bye.';
    break;
  }
  return answer;
}
