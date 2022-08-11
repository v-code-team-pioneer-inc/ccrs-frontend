import { useRouter } from "next/router";

export default function RoomShow() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Room Show {id}</h1>
    </div>
  );
}
