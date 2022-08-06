import { useRouter } from "next/router";

const Reservation = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Reservation { id }</h1>
    </div>
  );
}

export default Reservation;