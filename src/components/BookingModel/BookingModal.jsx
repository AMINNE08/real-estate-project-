import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { useMutation } from "react-query";
import { bookVisit } from "../../shared/api";
import { toast } from "react-toastify";

const BookingModal = ({ opened, setOpened, propertyId, email, token  }) => {
  const [value, setValue] = useState(null);
  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      return bookVisit(value, propertyId, email, token);
    },
    onSuccess: () => {
      toast.success("Your visit has been booked successfully", { position: "bottom-right" });
      setOpened(false);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Something went wrong during booking.",
        { position: "bottom-right" }
      );
    },
    onSettled: () => {
      setValue(null); 
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date to visit"
      centered
    >
      <div className="flexCenter flex-col gap-4">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          {isLoading ? "Booking..." : "Book Visit"}
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;