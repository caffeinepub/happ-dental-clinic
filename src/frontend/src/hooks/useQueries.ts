import { useMutation, useQuery } from "@tanstack/react-query";
import type { Appointment } from "../backend.d";
import { useActor } from "./useActor";

export function useBookAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      concern,
      preferredTime,
    }: {
      name: string;
      phone: string;
      concern: string;
      preferredTime: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.bookAppointment(name, phone, concern, preferredTime);
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      message,
    }: {
      name: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, phone, message);
    },
  });
}

export function useGetAllAppointments() {
  const { actor, isFetching } = useActor();
  return useQuery<Appointment[]>({
    queryKey: ["appointments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAppointments();
    },
    enabled: !!actor && !isFetching,
  });
}
