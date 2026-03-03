import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Appointment {
    id: bigint;
    concern: string;
    name: string;
    preferredTime: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    name: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    bookAppointment(name: string, phone: string, concern: string, preferredTime: string): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAppointmentById(id: bigint): Promise<Appointment>;
    getContactSubmissionById(id: bigint): Promise<ContactSubmission>;
    submitContactForm(name: string, phone: string, message: string): Promise<bigint>;
}
