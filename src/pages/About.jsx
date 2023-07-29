import React from "react";
import Team from "../components/Team";

const About = () => {
  return (
    <div>
      {/*ABOUT */}
      <section className="bg-gray-200 py-8 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="h-full bg-red-100 border border-red-300 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Story</h3>
                <p className="text-red-600">
                  Once upon a time, four passionate food lovers came together
                  with a common vision - to provide delicious food right at your
                  doorstep. Our journey started with a shared love for culinary
                  delights and a strong desire to bring convenience to our
                  customers' lives. With each member bringing their unique
                  expertise and skills to the table, we embarked on the
                  adventure of creating a food delivery service that would
                  revolutionize the industry.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="h-full bg-red-200 border border-red-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <ul className="list-disc list-inside text-red-600">
                  <li>
                    Quality: We are committed to providing the highest quality
                    of food to our customers.
                  </li>
                  <li>
                    Reliability: We strive to deliver your favorite meals on
                    time, every time.
                  </li>
                  <li>
                    Customer Satisfaction: Your satisfaction is our top
                    priority, and we go the extra mile to exceed your
                    expectations.
                  </li>
                  <li>
                    Innovation: We continuously innovate and improve our
                    services to enhance your dining experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="h-full bg-red-300 border border-red-500 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Services</h3>
                <p className="text-red-700">
                  At our company, we offer a wide range of services to cater to
                  your culinary cravings. Whether you're looking for a quick
                  bite, a family meal, or a gourmet dining experience, we've got
                  you covered. Our dedicated team of chefs and delivery
                  personnel work tirelessly to ensure that your food arrives
                  fresh and flavorful, right at your doorstep.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="h-full bg-red-400 border border-red-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  Our Vision and Mission
                </h3>
                <p className="text-red-800">
                  Our vision is to become the go-to food delivery service, known
                  for our exceptional quality, reliability, and customer
                  satisfaction. We aim to revolutionize the way people
                  experience food delivery by constantly pushing boundaries and
                  introducing innovative solutions. Our mission is to provide a
                  seamless and delightful dining experience, making every meal
                  memorable for our valued customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**TEAM */}
      <Team />
    </div>
  );
};

export default About;
