import { notFound } from "next/navigation";
import { DayRoute } from "@/components/day-route";
import { findTripDayById, getAllDayIds } from "@/lib/guide-config";

export function generateStaticParams() {
  return getAllDayIds().map((dayId) => ({ dayId }));
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ dayId: string }>;
}) {
  const { dayId } = await params;

  if (!findTripDayById(dayId)) {
    notFound();
  }

  return <DayRoute dayId={dayId} />;
}
