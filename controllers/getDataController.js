import fs from "fs";
import path from "path";
import data from "./../data.json" assert { type: "json" };
import { connectDB } from "../conf/dbConfig.js";

// const LBNagarZone = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23,
// ];

// const CharminarZone = [
//   24, 25, 26, 27, 28, 29, 30, 31, 34, 35, 37, 38, 39, 36, 40, 41, 42, 43, 44,
//   45, 32, 33, 48, 49, 52, 46, 47, 53, 54, 55, 56, 57, 58, 59, 60, 61,
// ];

// const KhairathabadZone = [
//   50, 51, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
//   91, 92, 93, 94, 95, 97, 98, 100,
// ];

// const SerilingampallyZone = [
//   96, 99, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
// ];

// const KukatpallyZone = [
//   114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
//   129, 130, 131, 132, 133, 134, 135,
// ];

// const SecunderabadZone = [
//   79, 78, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 136, 137, 138, 139, 140, 141,
//   142, 143, 144, 145, 146, 147, 148, 149, 150,
// ];

// let Kapra = [1, 2, 3, 4, 5, 6];
// let Uppal = [7, 8, 9, 10];
// let Hayathnagar = [11, 12, 13, 14];
// let LB_Nagar = [15, 16, 17, 18];
// let Saroornagar = [19, 20, 21, 22, 23];
// let Malakpet = [24, 25, 26, 27, 28, 29, 30];
// let SantoshNagar = [31, 34, 35, 37, 38, 39];
// let Chandrayangutta = [36, 40, 41, 42, 43, 44, 45];
// let Charminar = [32, 33, 48, 49, 52];
// let Falaknama = [46, 47, 53, 54, 55, 56];
// let RajendraNagar = [57, 58, 59, 60, 61];
// let Karwan = [62, 65, 66, 67, 68, 69];
// let Mehdipatnam = [70, 71, 72, 73, 74, 75, 76];
// let Goshmahal = [50, 51, 64, 77, 78, 63];
// let Khairatabad = [91, 97, 98, 100];
// let JubileeHils = [92, 93, 94, 95];
// let Yousufguda = [96, 99, 10, 102, 103];
// let serilingampally = [104, 105, 106];
// let ChandaNagar = [107, 108, 109, 110];
// let Patancheruvu = [111, 112, 113];
// let Moosapet = [114, 115, 116, 117, 118];
// let Kukatpally = [119, 120, 121, 122, 123, 124];
// let Qutbullapur = [127, 130, 131, 132];
// let Gajularamaram = [125, 126, 128, 129];
// let Alwal = [133, 134, 135];
// let Malkajgiri = [136, 137, 138, 139, 140, 141];
// let Amberpet = [79, 80, 81, 82, 83, 84];
// let Musheerabad = [85, 86, 87, 88, 89, 90];
// let Begumpet = [147, 148, 149, 150];
// let Secunderabad = [142, 143, 144, 145, 146];

// const qArr = (arr) => arr.map(String);

// export async function getAllData(req, res) {
//   // Write the sorted data to a new JSON file

//   function getCoordinates(ZoneName) {
//     let coordinatess = data
//       .map((object, index) => {
//         let ward_no = index + 1;
//         function wardNoExist(ward_no_array, ward_no) {
//           if (ward_no_array.includes(ward_no)) {
//             return object.geometry.coordinates;
//           } else {
//             return null; // returning null for ward numbers not found
//           }
//         }
//         return wardNoExist(ZoneName, ward_no);
//       })
//       .filter((coordinates) => coordinates !== null);

//     return coordinatess;
//   }
//   function getChildren(circles, circleName) {
//     let children = data
//       .map((object, index) => {
//         let ward = index + 1;

//         function getChildInfo(children_array, child) {
//           if (children_array.includes(child)) {
//             let { properties, geometry } = object;
//             return {
//               value: `${properties.sourcewardname} Ward${properties.wardcode}`,
//               title: `${properties.sourcewardname}`,
//               coordinates: geometry.coordinates,
//             };
//           } else {
//             return null;
//           }
//         }

//         return getChildInfo(circles, ward);
//       })
//       .filter((child) => child !== null);

//     let response = {
//       value: `${circleName} Circle`,
//       title: circleName,
//       children: children,
//     };

//     return response;
//   }

//   let L_B_NagarArray = {
//     value: "L.B.Nagar",
//     title: "L.B.Nagar East Zone",
//     zoneDetail: {
//       name: "East Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(LBNagarZone),
//     },
//     children: [
//       getChildren(Kapra, "Kapra"),
//       getChildren(Uppal, "Uppal"),
//       getChildren(Hayathnagar, "Hayathnagar"),
//       getChildren(LB_Nagar, "L.B. Nagar"),
//       getChildren(Saroornagar, "Saroornagar"),
//     ],
//   };
//   let CharminarArray = {
//     value: "Charminar",
//     title: "Charminar South Zone",
//     zoneDetail: {
//       name: "South Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(CharminarZone),
//     },
//     children: [
//       getChildren(Malakpet, "Malakpet"),
//       getChildren(SantoshNagar, "Santoshnagar"),
//       getChildren(Chandrayangutta, "Chandrayangutta"),
//       getChildren(Charminar, "Charminar"),
//       getChildren(Falaknama, "Falaknuma"),
//       getChildren(RajendraNagar, "Rajendra Nagar"),
//     ],
//   };
//   let KhairatabadArray = {
//     value: "Khairatabad ",
//     title: "Khairatabad Central Zone",
//     zoneDetail: {
//       name: "Central Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(KhairathabadZone),
//     },
//     children: [
//       getChildren(Mehdipatnam, "Mehdipatnam"),
//       getChildren(Karwan, "Karwan"),
//       getChildren(Goshmahal, "Goshamahal"),
//       getChildren(Khairatabad, "Khairatabad"),
//       getChildren(JubileeHils, "Jubilee Hills"),
//     ],
//   };
//   let SecunderabadArray = {
//     value: "Secunderabad",
//     title: "Secunderabad North Zone",
//     zoneDetail: {
//       name: "North Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(SecunderabadZone),
//     },
//     children: [
//       getChildren(Amberpet, "Amberpet"),
//       getChildren(Musheerabad, "Musheerabad"),
//       getChildren(Malkajgiri, "Malkajgiri"),
//       getChildren(Secunderabad, "Secunderabad"),
//       getChildren(Begumpet, "Begumpet"),
//     ],
//   };
//   let SerilingampallyArray = {
//     value: "Serilingampally",
//     title: "Serilingampally West Zone",
//     zoneDetail: {
//       name: "West Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(SerilingampallyZone),
//     },
//     children: [
//       getChildren(Yousufguda, "Yousufguda"),
//       getChildren(serilingampally, "Serilingampally"),
//       getChildren(ChandaNagar, "Chandanagar"),
//       getChildren(Patancheruvu, "Ramachandrapuram / Patancheru"),
//     ],
//   };
//   let KukatpallyArray = {
//     value: "Kukatpally",
//     title: "Kukatpally West Zone",
//     zoneDetail: {
//       name: "West Zone",
//       type: "MultiPolygon",
//       coordinates: getCoordinates(KukatpallyZone),
//     },
//     children: [
//       getChildren(Moosapet, "Moosapet"),
//       getChildren(Kukatpally, "Kukatpally"),
//       getChildren(ChandaNagar, "Chandanagar"),
//       getChildren(Qutbullapur, "Quthbullapur"),
//       getChildren(Gajularamaram, "Gajula Ramaram"),
//       getChildren(Alwal, "Alwal"),
//     ],
//   };
//   const outputArray = [
//     L_B_NagarArray,
//     CharminarArray,
//     KhairatabadArray,
//     SecunderabadArray,
//     SerilingampallyArray,
//     KukatpallyArray,
//   ];

//   const dbConnection = await connectDB();
//   let client = dbConnection.connection.client;
//   const db = client.db("x_map");
//   const collection = db.collection("ward_collection");
//   const totalDocuments = await collection.countDocuments();
//   const allDocuments = await collection.find({}).toArray();
//   console.log(
//     LBNagarZone.length +
//       CharminarZone.length +
//       KhairathabadZone.length +
//       SerilingampallyZone.length +
//       KukatpallyZone.length +
//       SecunderabadZone.length
//   );
//   // console.log("Retrieved data:", datas);
//   // console.log(datas);
//   res.status(200).json({
//     message: "Route is hit successfully",
//     data: allDocuments,
//     total: totalDocuments,
//     length:
//       LBNagarZone.length +
//       CharminarZone.length +
//       KhairathabadZone.length +
//       SerilingampallyZone.length +
//       KukatpallyZone.length +
//       SecunderabadZone.length,
//   });
// }
// export async function getCoordinates(req, res) {
//   const { wards } = req.body;
//   const dbConnection = await connectDB();
//   let client = dbConnection.connection.client;
//   const db = client.db("x_map");
//   const collection = db.collection("ward_collection");

//   // Define the query
//   const query = { "properties.wardcode": { $in: qArr(wards) } };

//   const doc = await collection.find(query).toArray();
//   const response = doc.map((object) => {
//     return {
//       name: object.properties.ward_lgd_name,
//       wardName: object.properties.sourcewardname,
//       coordinates: object.geometry,
//     };
//   });
//   res.status(200).json({
//     message: "Route is hit successfully",
//     total: response,
//   });
// }
// export async function getDropDownData(req, res) {
//   const { wards } = req.body;
//   const dbConnection = await connectDB();
//   let client = dbConnection.connection.client;
//   const db = client.db("x_map");
//   const collection = db.collection("ward_collection");

//   // Define the query
//   const query = { "properties.wardcode": { $in: qArr(wards) } };

//   const doc = await collection.find(query).toArray();
//   const response = doc.map((object) => {
//     return {
//       name: object.properties.ward_lgd_name,
//       wardName: object.properties.sourcewardname,
//       coordinates: object.geometry,
//     };
//   });
//   res.status(200).json({
//     message: "Route is hit successfully",
//     total: response,
//   });
// }
export async function getAllData(req, res) {
  const dbConnection = await connectDB();
  let client = dbConnection.connection.client;
  const db = client.db("x_map");
  const collection = db.collection("all_the_data");
  const totalDocuments = await collection.countDocuments();
  const allDocuments = await collection.find({}).toArray();

  res.status(200).json({
    message: "Route is hit successfully",
    data: allDocuments,
    total: totalDocuments,
  });
}
