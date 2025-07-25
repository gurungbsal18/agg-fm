import React from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "@heroui/button";
import { RiBuildingLine } from "react-icons/ri";
import { LuUserCog } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbDatabaseStar } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import Link from "next/link";

interface serviceDataProps {
  id: number;
  title: string;
  icon: React.ElementType;
  link: string;
}

const serviceData: serviceDataProps[] = [
  {
    id: 1,
    title: "Building Maintenance",
    icon: RiBuildingLine,
    link: "/building-maintenance",
  },
  {
    id: 2,
    title: "Concierge Services",
    icon: LuUserCog,
    link: "/concierge-services",
  },
  {
    id: 3,
    title: "Cleaning Professionals",
    icon: MdCleaningServices,
    link: "/cleaning-professionals",
  },
  {
    id: 4,
    title: "Cleaning Services",
    icon: MdCleaningServices,
    link: "/cleaning-services",
  },
  {
    id: 5,
    title: "Swimming Pool Maintenance Services",
    icon: LiaSwimmingPoolSolid,
    link: "/swimming-pool-and-maintenance-services",
  },
  {
    id: 6,
    title: "Landscape Maintenance Services",
    icon: GrUserWorker,
    link: "/landscape-maintenance-services",
  },
  {
    id: 7,
    title: "Mechanical, Electrical and Plumbing (MEP)",
    icon: HiOutlineWrenchScrewdriver,
    link: "/mep-services",
  },
  {
    id: 8,
    title: "Defaulters Management and Recovery Services",
    icon: TbDatabaseStar,
    link: "/aggfm-defaulters-management-and-recovery-services",
  },
  {
    id: 9,
    title: "Security Guard Services",
    icon: FaUserShield,
    link: "/security-guards-and-services",
  },
  {
    id: 10,
    title: "Inventory Fixed Assest Tagging Service",
    icon: GoChecklist,
    link: "/inventory-fixed-assets-tagging-service",
  },
  {
    id: 11,
    title: "AGM/EGM Services",
    icon: FaUsers,
    link: "/agm-egm-services",
  },
  {
    id: 12,
    title: "Valet Parking Services",
    icon: FaCar,
    link: "/valet-parking",
  },
];

export default function AggFacilitiesSection() {
  return (
    <div className="container animation-block">
      <div className="flex flex-col md:flex-row justify-between">
        <SectionTitle title="AGG Facilities Management PLT Services" />
        <Button color="primary" radius="sm">
          Explore All Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {serviceData.map((list) => {
          return (
            <div key={list.id}>
              <Link
                href={list.link}
                className="col-span-1 flex gap-2 items-center hover:rounded-sm hover:text-white hover:bg-primary px-4 py-2"
              >
                <list.icon size={24} className="custom-icon" />
                <p>{list.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
