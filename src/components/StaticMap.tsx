export interface StaticMapProps {
  address?: string;
}

export const initialProps: StaticMapProps = {
  address:
    "61 9th Ave, New York, NY 10011",
};

const StaticMap = ({
  address
}: StaticMapProps) => {
  

  return (
    <>
      <img
        className="w-full"
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${address}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${address}` +
          "&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
        }
      ></img>
    </>
  );
};

export default StaticMap;
