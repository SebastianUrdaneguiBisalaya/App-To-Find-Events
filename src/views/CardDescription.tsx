import { MainDetailsCard, Texts, MapComponent } from "../components";
import { ShoppingCart } from "../Layout/ShoppingCart";
import { useParams } from "react-router-dom";
import { fetchData } from "../services";
import { useEffect, useRef, useState } from "react";

export interface Tickets {
  ticket_id: string;
  event_id: string;
  ticket_type: string;
  ticket_price: string;
  ticket_quantity: number;
}

export interface EventDetailById {
  event_name: string;
  event_category: string;
  event_date: string;
  event_hour: string;
  event_place: string;
  event_latitude: number;
  event_longitude: number;
  event_capacity: number;
  event_img: string;
  event_description: string;
  event_artist: string;
  pre_sale_date: Date;
  pre_sale_end_date: Date;
  pre_sale_discount: number;
  tickets: Tickets[];
}

interface CartItemAPI {
  event_id: string;
  ticket_id: string;
  event_name: string;
  tickettype: string;
  ticket_price: string;
  taxes: string;
  ticket_type: string;
}

interface CartItem {
  event_id: string;
  ticket_id: string;
  title: string;
  tickettype: string;
  price: string;
  taxes: string;
  details: string;
}

export const CardDescription = () => {
  const { id } = useParams<{ id: string }>();
  const [eventDescription, setEventDescription] = useState<EventDetailById>();
  const [ticketsEvent, setTicketEvents] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const getEventDetailById = async (id: string) => {
    try {
      setIsLoading(true);
      const controller = new AbortController();
      abortControllerRef.current = controller;
      const result = await fetchData({
        baseUrl: `${import.meta.env.VITE_API_EVENT_DETAIL}/${id}`,
        signal: controller.signal,
      });
      if (result) {
        setEventDescription(result);
        const ticketsFormat = result.tickets.map((item: CartItemAPI) => ({
          event_id: item.event_id,
          ticket_id: item.ticket_id,
          title: result.event_name,
          tickettype: item.ticket_type,
          price: item.ticket_price,
          taxes: "Incluye impuestos",
          details: item.ticket_type,
        }));
        setTicketEvents(ticketsFormat);
      }
    } catch (error) {
      throw new Error(`Unnable to get the event detail by id. ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getEventDetailById(id);
    }
    return () => {
      if (abortControllerRef.current && isLoading) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <>
      {eventDescription && ticketsEvent && (
        <div className="flex flex-col items-center justify-center min-h-screen md:grid md:grid-cols-2 gap-4 md:w-[906px] mx-auto my-auto px-10 py-10 md:shadow-md rounded-[20px] mt-10">
          <div className="flex flex-col items-center justify-center max-w-[400px] relative">
            <img
              src={eventDescription?.event_img}
              alt="Image"
              className="w-full h-auto rounded-lg"
            />
            <div className="inset-x-0 top-[30%] md:top-[1/3] flex justify-center transform -translate-y-1/3">
              <MainDetailsCard
                artist={eventDescription?.event_artist}
                eventTitle={eventDescription?.event_name}
                location={eventDescription?.event_place}
                date={new Date(eventDescription?.event_date).toISOString().split("T")[0]}
                capacity="100+ participants"
              />
            </div>
            <div className="w-full px-4">
              <h3 className="font-poppins text-xl font-medium">Description</h3>
              <Texts
                text={eventDescription?.event_description}
                type="secondary"
                color="black"
              />
            </div>
          </div>

          <div className="max-w-md mt-4">
            <h3 className="font-poppins text-xl font-medium">Ubicación</h3>
            <MapComponent
              market="Peru"
              position={[eventDescription?.event_latitude, eventDescription?.event_longitude]}
            />
            <div className="mt-2">
              <h3 className="font-poppins text-xl font-medium">Tarifario</h3>
              <ShoppingCart cartItems={ticketsEvent} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
