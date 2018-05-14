// Factory pattern

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    switch (type) {
      case 'standard':
        member = new StandardMembership(name);
        break;
      case 'super':
        member = new SuperMembership(name);
        break;
      default:
        member = new SimpleMembership(name);
    }

    // if (type === 'simple') {
    //   member = new SimpleMembership(name);
    // } else if (type === 'standard') {
    //   member = new StandardMembership(name);
    // } else if (type === 'super') {
    //   member = new SuperMembership(name);
    // }
    //
    // member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
  this.type = 'simple';
};
const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
  this.type = 'standard';
};
const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
  this.type = 'super';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Darth', 'super'));
members.push(factory.createMember('Yoda', 'simple'));
members.push(factory.createMember('Luke', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});
