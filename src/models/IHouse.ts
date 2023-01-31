interface IHouseImage {
    room: string;
    url: string;
}
export default interface IHouse {
    id: number;
    time_created: string;
    time_updated: string;
    operation: string;
    name_roads: string;
    number_house: string;
    plant: string;
    max_plant: number;
    phone_number: string;
    whatsapp: string | null;
    link_offer: string | null;
    link_site_company: string | null;
    status: string;
    m2_build: number;
    m2_useful: number;
    many_rooms: number;
    many_bathrooms_and_toilets: number;
    reduced_mobility: boolean;
    price: number;
    deposit: number | null;
    description: string;
    photos: IHouseImage[];
}
