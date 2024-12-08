import Debug "mo:base/Debug";

actor {
    public query func greet(name : Text) : async Text {
      var res = "Hello, " # name # "!";
      Debug.print("greet: " # res);
      res
    };
};
