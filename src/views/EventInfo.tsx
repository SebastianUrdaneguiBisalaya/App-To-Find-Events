import { MainDetailsCard, MapComponent } from "../components";
import { ShoppingCart } from "../Layout/ShoppingCart";

const data = {
  artist: "Coldplay",
  eventTitle: "Viva La Vida",
  location: "London",
  date: "December 12 2022",
  capacity: "100",
  image:
    "https://www.hindustantimes.com/ht-img/img/2024/09/22/550x309/AUSTRIA-BRITAIN-MUSIC-CONCERT-COLDPLAY-SECURITY-12_1726973147488_1726973178311.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in arcu. Curabitur ut odio vel est tempor bibendum. Donec semper justo a lotus. Suspendisse potenti. In est risus, auctor ut, tristique ac, eleifend vitae, erat.",
};

export const EventInfo = () => {
  return (
    <div className="max-w-[1500px] lg:w-[1000px] min-h-screen flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-4 md:gap-6 m-auto md:p-10 md:shadow-lg md:rounded-[20px]">
      <div className="w-full">
        <div className="relative flex flex-col items-center">
          <img
            src={data.image}
            alt="Image"
            className="min-h-[300px] md:rounded-lg w-full lg:w-[375px]"
          />
          <div className="absolute top-2/3 w-auto">
            <MainDetailsCard
              artist={data.artist}
              eventTitle={data.eventTitle}
              location={data.location}
              date={data.date}
              capacity={data.capacity}
            />
          </div>
        </div>
        <div className="mt-20 sm:mt-16 md:mt-20 mx-auto px-4">
          <h3 className="font-poppins text-xl font-medium mb-2">Description</h3>
          <p className="font-normal text-sm text-justify">{data.description}</p>
        </div>
      </div>
      <div className="w-full px-4">
        <div>
          <h3 className="font-poppins text-xl font-medium mb-2">Ubicación</h3>
          <MapComponent
            market="London"
            position={[51.505, -0.09]}
            classname="sm:h-[350px] md:h-[280px]"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-poppins text-xl font-medium">Tarifario</h3>
          <ShoppingCart />
          <h4 className="font-poppins text-[#761CBC] font-medium mt-2 text-center sm:text-right">
            Guardar y Seguir comprando
          </h4>
        </div>
      </div>
    </div>
  );
};
