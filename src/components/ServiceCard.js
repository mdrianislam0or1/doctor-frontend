import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <div className="p-10 m-auto w-80 h-80">
          <img className="" src={service.img} alt="Sunset in the mountains" />
        </div>
        <div class="px-6 pb-10">
          <div class=" text-xl mb-2 text-center">{service.name}</div>
          <p class="text-gray-700 text-center">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
