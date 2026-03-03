import Order "mo:core/Order";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type Appointment = {
    id : Nat;
    name : Text;
    phone : Text;
    concern : Text;
    preferredTime : Text;
    timestamp : Time.Time;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Comparison Modules
  module Appointment {
    public func compare(a1 : Appointment, a2 : Appointment) : Order.Order {
      Nat.compare(a1.id, a2.id);
    };
  };

  module ContactSubmission {
    public func compare(c1 : ContactSubmission, c2 : ContactSubmission) : Order.Order {
      Nat.compare(c1.id, c2.id);
    };
  };

  let appointments = Map.empty<Nat, Appointment>();
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  var nextAppointmentId = 1;
  var nextContactId = 1;

  // Appointment functions
  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, concern : Text, preferredTime : Text) : async Nat {
    let id = nextAppointmentId;
    let appointment : Appointment = {
      id;
      name;
      phone;
      concern;
      preferredTime;
      timestamp = Time.now();
    };
    appointments.add(id, appointment);
    nextAppointmentId += 1;
    id;
  };

  // Contact submission functions
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, message : Text) : async Nat {
    let id = nextContactId;
    let submission : ContactSubmission = {
      id;
      name;
      phone;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(id, submission);
    nextContactId += 1;
    id;
  };

  // Admin views
  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };

  // Get by ID
  public query ({ caller }) func getAppointmentById(id : Nat) : async Appointment {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };

  public query ({ caller }) func getContactSubmissionById(id : Nat) : async ContactSubmission {
    switch (contactSubmissions.get(id)) {
      case (null) { Runtime.trap("Contact submission not found") };
      case (?submission) { submission };
    };
  };
};
