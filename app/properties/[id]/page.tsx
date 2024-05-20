import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/reservationSideBar";
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <hr/>
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic.jpg"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="The user name"
                        />
                        <p><strong>Denver</strong> is your host</p>
                    </div>
                    <hr/>
                    <p className="mt-6 txt-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nunc nisi. Duis orci est, scelerisque sit amet vehicula non, sodales quis turpis. Nam volutpat 
                        vulputate mi id molestie. Sed eros libero, viverra non massa in, molestie vulputate libero. Pellentesque laoreet mollis neque vehicula ullamcorper. Sed ut viverra 
                        ipsum. Nulla faucibus nisl at justo mattis, at pretium lectus malesuada. Sed dui purus, dignissim vel dui quis, ornare fermentum turpis. Duis tincidunt odio ligula, 
                        at mattis libero consectetur a. Aenean eu tempor magna. Nullam cursus imperdiet urna, ut facilisis est mollis et. Fusce iaculis gravida turpis, sit amet 
                        faucibus velit dapibus eget. Aliquam ac lorem vitae turpis vestibulum congue. Sed quis congue mauris. Praesent ac congue nibh.
                    </p>
                </div>
                
                <ReservationSideBar />
                
            </div>
        </main>
    )
}

export default PropertyDetailPage;