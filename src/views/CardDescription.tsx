import { MainDetailsCard, Texts, MapComponent } from "../components";
import { ShoppingCart } from "../Layout/ShoppingCart";

export const CardDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:grid md:grid-cols-2 gap-4 md:w-[906px] mx-auto my-auto px-10 py-10 md:shadow-md rounded-[20px]">
      <div className="flex flex-col items-center justify-center max-w-[400px] relative">
        <img
          src="https://www.hindustantimes.com/ht-img/img/2024/09/22/550x309/AUSTRIA-BRITAIN-MUSIC-CONCERT-COLDPLAY-SECURITY-12_1726973147488_1726973178311.jpg"
          alt="Image"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-x-0 top-1/3 flex justify-center transform -translate-y-1/2">
          <MainDetailsCard
            artist="Coldplay:"
            eventTitle="Viva La Vida"
            location="London"
            date="December 12 2022"
            capacity="100+ participants"
          />
        </div>
        <div className="mt-24 w-full px-4">
          <h3 className="font-poppins text-xl font-medium">Description</h3>
          <Texts
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in arcu. Curabitur ut odio vel est tempor bibendum. Donec semper justo a lotus. Suspendisse potenti. In est risus, auctor ut, tristique ac, eleifend vitae, erat."
            type="secondary"
            color="black"
          />
        </div>
      </div>

      <div className="max-w-md mt-4">
        <h3 className="font-poppins text-xl font-medium">Ubicación</h3>
        <MapComponent
          market="London"
          position={[51.505, -0.09]}
        />
        <div className="mt-2">
          <h3 className="font-poppins text-xl font-medium">Tarifario</h3>
          <ShoppingCart />
        </div>
        <h4 className="font-poppins text-[#761CBC] font-medium mt-2 flex justify-center">Tickets</h4>
      </div>
    </div>
  );
};
