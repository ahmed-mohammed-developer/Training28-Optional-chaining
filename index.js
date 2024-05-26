const user = {
  details: {
    name: {
      fristname: "AAAAA",
    }
  },
  date: null
};

console.log(user.details?.name?.fristname);
console.log(user.date?.id);
console.log(user.children?.names);

const getfu = user => {
  return user.info?.name;
};

console.log(getfu({info: {name: "Sam"}}));

const va = user => {
  return user.payment?.details?.value;
};
console.log(va({id: 1, name: "Alex"})); 


const data = {
  tem: [-3, 14, 4],
};

const fris = data.tem?.[0];

console.log(fris);

const person = {
  age: 43,
  name: "ahmedzakan"
};

const upper = person.name?.toUpperCase();

console.log(upper);


const settings = {
  theme: "dark",
};

settings?.theme && (settings.theme = "light");
console.log(settings);


const gr = data => {
  return data.results?.grades?.[0];
};
console.log(gr({results: {grades:[ 18, 14, 19]}})); // 18

const fullName = user => {
  return user.info?.name?.toLowerCase();
};
console.log(fullName({info: {name: "ALEX"}})); // "alex"

/*
function is_same(name1, name2){
  return name1 === name2;
}
*/
function is_same(name1, name2) {
    // write your code here
      if (name1===name2){
        return "متشابهين";
      } 
      return "غير متشابهين";
}
console.log(is_same("a", "aآ"));


function isEmpty(strParam) {
  // write your code here
  return strParam === "";
}
console.log(isEmpty(""));
