// app/states/[state]/page.js
import StatePageTemplate from "../../../components/StatePageTemplate";
import { notFound } from "next/navigation";

const STATE_CONFIG = {
  alabama: {
    stateName: "Alabama",
    stateSlug: "alabama",
    cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
  },
  arizona: {
    stateName: "Arizona",
    stateSlug: "arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale"],
  },
  arkansas: {
    stateName: "Arkansas",
    stateSlug: "arkansas",
    cities: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale", "Jonesboro"],
  },
  colorado: {
    stateName: "Colorado",
    stateSlug: "colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Pueblo"],
  },
  connecticut: {
    stateName: "Connecticut",
    stateSlug: "connecticut",
    cities: ["Hartford", "New Haven", "Stamford", "Bridgeport", "Waterbury"],
  },
  delaware: {
    stateName: "Delaware",
    stateSlug: "delaware",
    cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"],
  },
  florida: {
    stateName: "Florida",
    stateSlug: "florida",
    cities: [
      "Miami",
      "Orlando",
      "Tampa",
      "Jacksonville",
      "St. Petersburg",
      "Fort Lauderdale",
    ],
  },
  georgia: {
    stateName: "Georgia",
    stateSlug: "georgia",
    cities: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon"],
  },
  idaho: {
    stateName: "Idaho",
    stateSlug: "idaho",
    cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
  },
  illinois: {
    stateName: "Illinois",
    stateSlug: "illinois",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"],
  },
  indiana: {
    stateName: "Indiana",
    stateSlug: "indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Gary"],
  },
  iowa: {
    stateName: "Iowa",
    stateSlug: "iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
  },
  kansas: {
    stateName: "Kansas",
    stateSlug: "kansas",
    cities: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe"],
  },
  kentucky: {
    stateName: "Kentucky",
    stateSlug: "kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"],
  },
  louisiana: {
    stateName: "Louisiana",
    stateSlug: "louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
  },
  maine: {
    stateName: "Maine",
    stateSlug: "maine",
    cities: ["Portland", "Bangor", "Lewiston", "Augusta", "South Portland"],
  },
  maryland: {
    stateName: "Maryland",
    stateSlug: "maryland",
    cities: ["Baltimore", "Annapolis", "Silver Spring", "Rockville", "Frederick"],
  },
  massachusetts: {
    stateName: "Massachusetts",
    stateSlug: "massachusetts",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
  },
  michigan: {
    stateName: "Michigan",
    stateSlug: "michigan",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"],
  },
  minnesota: {
    stateName: "Minnesota",
    stateSlug: "minnesota",
    cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"],
  },
  mississippi: {
    stateName: "Mississippi",
    stateSlug: "mississippi",
    cities: ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Southaven"],
  },
  missouri: {
    stateName: "Missouri",
    stateSlug: "missouri",
    cities: ["St. Louis", "Kansas City", "Springfield", "Columbia", "Independence"],
  },
  montana: {
    stateName: "Montana",
    stateSlug: "montana",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"],
  },
  nebraska: {
    stateName: "Nebraska",
    stateSlug: "nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
  },
  nevada: {
    stateName: "Nevada",
    stateSlug: "nevada",
    cities: ["Las Vegas", "Henderson", "Reno", "Sparks", "Carson City"],
  },
  "new-hampshire": {
    stateName: "New Hampshire",
    stateSlug: "new-hampshire",
    cities: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"],
  },
  "new-mexico": {
    stateName: "New Mexico",
    stateSlug: "new-mexico",
    cities: ["Albuquerque", "Santa Fe", "Las Cruces", "Rio Rancho", "Roswell"],
  },
  "north-carolina": {
    stateName: "North Carolina",
    stateSlug: "north-carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
  },
  "north-dakota": {
    stateName: "North Dakota",
    stateSlug: "north-dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
  },
  ohio: {
    stateName: "Ohio",
    stateSlug: "ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Dayton"],
  },
  oklahoma: {
    stateName: "Oklahoma",
    stateSlug: "oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton"],
  },
  oregon: {
    stateName: "Oregon",
    stateSlug: "oregon",
    cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro"],
  },
  pennsylvania: {
    stateName: "Pennsylvania",
    stateSlug: "pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
  },
  "rhode-island": {
    stateName: "Rhode Island",
    stateSlug: "rhode-island",
    cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "Newport"],
  },
  "south-carolina": {
    stateName: "South Carolina",
    stateSlug: "south-carolina",
    cities: ["Columbia", "Charleston", "Greenville", "Spartanburg", "Myrtle Beach"],
  },
  "south-dakota": {
    stateName: "South Dakota",
    stateSlug: "south-dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
  },
  tennessee: {
    stateName: "Tennessee",
    stateSlug: "tennessee",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
  },
  texas: {
    stateName: "Texas",
    stateSlug: "texas",
    cities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso"],
  },
  utah: {
    stateName: "Utah",
    stateSlug: "utah",
    cities: ["Salt Lake City", "Provo", "Ogden", "Sandy", "West Jordan"],
  },
  vermont: {
    stateName: "Vermont",
    stateSlug: "vermont",
    cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Essex"],
  },
  virginia: {
    stateName: "Virginia",
    stateSlug: "virginia",
    cities: ["Virginia Beach", "Norfolk", "Richmond", "Arlington", "Chesapeake"],
  },
  washington: {
    stateName: "Washington",
    stateSlug: "washington",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
  },
  "west-virginia": {
    stateName: "West Virginia",
    stateSlug: "west-virginia",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"],
  },
  wisconsin: {
    stateName: "Wisconsin",
    stateSlug: "wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
  },
  wyoming: {
    stateName: "Wyoming",
    stateSlug: "wyoming",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"],
  },
};

// 🔹 App router version of getStaticPaths:
export function generateStaticParams() {
  return Object.keys(STATE_CONFIG).map((slug) => ({
    state: slug,
  }));
}

// 🔹 Page component receives params instead of props from getStaticProps
export default function StatePage({ params }) {
  const slug = params.state;
  const config = STATE_CONFIG[slug];

  if (!config) {
    return notFound();
  }

  return (
    <StatePageTemplate
      stateName={config.stateName}
      stateSlug={config.stateSlug}
      cities={config.cities}
    />
  );
}