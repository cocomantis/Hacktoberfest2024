// Object containing real pet names mapped to their traits, color, and type
const petNamesByAttributes = {
    dog: {
        playful: {
          black: ["Shadow", "Zorro", "Ace"],
          white: ["Snowy", "Luna", "Blanca"],
          brown: ["Coco", "Bruno", "Teddy"]
        },
        calm: {
          black: ["Milo", "Bear", "Raven"],
          white: ["Bella", "Angel", "Fluffy"],
          brown: ["Willow", "Oliver", "Rusty"]
        },
        energetic: {
          black: ["Dash", "Rocket", "Bolt"],
          white: ["Max", "Blizzard", "Sparky"],
          brown: ["Charlie", "Rusty", "Simba"]
        },
        loyal: {
          black: ["Knight", "King", "Shadow"],
          white: ["Snow", "Pearl", "Faith"],
          brown: ["Copper", "Buddy", "Duke"]
        },
        curious: {
          black: ["Hunter", "Oreo", "Midnight"],
          white: ["Casper", "Marble", "Nimbus"],
          brown: ["Biscuit", "Hopper", "Mocha"]
        }
    },
    cat: {
        playful: {
          black: ["Midnight", "Zippy", "Salem"],
          white: ["Whiskers", "Snowball", "Marble"],
          brown: ["Simba", "Nala", "Ginger"]
        },
        calm: {
          black: ["Onyx", "Jet", "Pepper"],
          white: ["Pearl", "Casper", "Ivory"],
          brown: ["Chloe", "Willow", "Autumn"]
        },
        energetic: {
          black: ["Luna", "Tigger", "Sable"],
          white: ["Frosty", "Misty", "Angel"],
          brown: ["Tiger", "Mochi", "Ziggy"]
        },
        loyal: {
          black: ["Panther", "King", "Boo"],
          white: ["Snowflake", "Diamond", "Frost"],
          brown: ["Oreo", "Milo", "Biscuit"]
        },
        curious: {
          black: ["Inky", "Smokey", "Noir"],
          white: ["Nimbus", "Cloud", "Frosty"],
          brown: ["Patches", "Hopper", "Whiskers"]
        }
    },
    bird: {
        playful: {
          black: ["Raven", "Chirpy", "Pepper"],
          white: ["Tweety", "Cloud", "Angel"],
          brown: ["Feathers", "Sunny", "Cinnamon"]
        },
        calm: {
          black: ["Noir", "Jet", "Storm"],
          white: ["Ivory", "Snow", "Pearl"],
          brown: ["Hazel", "Autumn", "Coco"]
        },
        energetic: {
          black: ["Swoop", "Flap", "Jet"],
          white: ["Blizzard", "Frosty", "Nimbus"],
          brown: ["Chirpy", "Twig", "Sunny"]
        },
        loyal: {
          black: ["Sable", "Storm", "Raven"],
          white: ["Snowy", "Fluffy", "Frost"],
          brown: ["Cinnamon", "Goldie", "Twig"]
        },
        curious: {
          black: ["Inky", "Smokey", "Noir"],
          white: ["Nimbus", "Frosty", "Ivory"],
          brown: ["Pip", "Hazel", "Twig"]
        }
    }
    // Add more pet types
};
  
// Function to get the input values
function getInputValues() {
    const petType = document.getElementById('petType').value.toLowerCase();
    const traits = document.getElementById('petTrait').value.toLowerCase();
    const color = document.getElementById('petColour').value.toLowerCase();
  
    return { petType, traits, color };
  }



// Function to get a matching pet name based on type, traits, and color
function getMatchingName(petType, traits, color) {
    let matchedNames = [];
  
    // Check if the petType and color exist in the database
    if (petNamesByAttributes[petType]) {
      if (petNamesByAttributes[petType][traits] && petNamesByAttributes[petType][traits][color]) {
        matchedNames = matchedNames.concat(petNamesByAttributes[petType][traits][color]);
      }
    }
  
    if (matchedNames.length > 0) {
      // Randomly choose one name from the matched names
      const randomIndex = Math.floor(Math.random() * matchedNames.length);
      return matchedNames[randomIndex];
    } else {
      return "No matching name found!";
    }
  }

// Form submission handler
document.getElementById('pet-name-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading page
  
    // Get selected pet type, traits, and color from the form
    const { petType, traits, color } = getInputValues();
  
    // Generate a pet name based on the selected inputs
    const suggestedName = getMatchingName(petType, traits, color);
  
    // Display the result
    document.getElementById('generated-name').innerHTML = `Suggested Pet Name: ${suggestedName}`;
    document.getElementById('generated-name').style.visibility = "visible";
  });
  

// Update the footer year
document.getElementById('year').textContent = new Date().getFullYear();