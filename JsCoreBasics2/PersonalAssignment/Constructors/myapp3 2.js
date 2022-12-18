function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    age:1, 
    walking: function () {
      alert(`im walking here ${this.name}`);
    },
    birthday: function(){
        return this.age++;
    }
  };

  const person1 = new Person('wallie');

  const person2 = new Person('Garrett');
