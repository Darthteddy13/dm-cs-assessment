function addToZero (arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === 0)
            {
                return true;
            }
        }
    }
    return false
}

//O(n^2) due to the nested for loops comparing with .length property

// console.log(addToZero([]));
// -> False

// console.log(addToZero([1]));
// -> False

// console.log(addToZero([1, 2, 3]));
// -> False

// console.log(addToZero([1, 2, 3, -2]));
// -> True

const hasUniqueChars = str =>
{
    let chars = []
    for(let i = 0; i < str.length; i++)
    {
        if(chars.includes(str[i]))
        {
            return false;
        }
        else
        {
            chars.push(str[i])
        }
    }
    return true;
}

//O(n) due to the for loop comparing with .length

// console.log(hasUniqueChars("Monday"));
// -> True

// console.log(hasUniqueChars("Moonday"));
// -> False

function isPangram (str)
{
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let i = 0; i < str.length; i++)
    {
        if(alphabet.includes(str[i]))
        {
            alphabet.splice(alphabet.indexOf(str[i]), 1)
        }
    }
    if(alphabet.length === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//O(n) due to the for loop comparing with .length although not sure it could be exponential
//due to the splice and indexOf methods

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

// console.log(isPangram("I like cats, but not mice"));
// -> False

const findLongestWord = arr =>
{
    let longest;
    
    for(let i = 0; i < arr.length; i++)
    {
        if(i === 0)
        {
            longest = arr[i].length;
        }
        else if(arr[i].length > longest)
        {
            longest = arr[i].length;
        }
    }
    return longest;
}

//O(n) due to the for loop comparing with .length

console.log(findLongestWord(["hi", "hello"]));
// -> 5