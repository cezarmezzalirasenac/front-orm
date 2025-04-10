import { Center, Chip, Container, Flex, Indicator } from "@mantine/core";
import { Calendar, DatePicker, DatesProvider } from '@mantine/dates';

export default function CreateAppointment() {
  return (
    <Container>
      <DatesProvider settings={{ consistentWeeks: true }}>
        <Center>
          <DatePicker
            defaultValue={new Date()}
            renderDay={(date) => {
              const day = date.getDate();
              return (
                <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
                  <div>{day}</div>
                </Indicator>
              );
            }}
          />
        </Center>
      </DatesProvider>
      <Center>
        <Chip variant="filled" size="lg" color="blue">10:00</Chip>
        <Chip variant="filled" size="lg" color="green">11:00</Chip>
        <Chip variant="filled" size="lg" color="green">12:00</Chip>
        <Chip variant="filled" size="lg" color="green">14:00</Chip>
        <Chip variant="filled" size="lg" color="green">15:00</Chip>
        <Chip variant="filled" size="lg" color="green">17:00</Chip>
      </Center>
    </Container>
  )
}