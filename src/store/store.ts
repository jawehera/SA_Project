// import {create} from 'zustand';
// import {produce} from 'immer';
// import {persist, createJSONStorage} from 'zustand/middleware';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import imageCompany from '../Data';

// export const useStore = create(
//   persist(
//     (set,get)=>({
//         company:imageCompany,
//         companiesSelected:[],
//         manipuleCompaniesSelected:(id:number)=>
//         set(
//             produce(state=>{
//                 for(let i=0 ;state.companiesSelected.length; i++){
//                     if (state.companiesSelected[i].id === id ){
//                         state.companiesSelected.splice(i,1);
//                     }
//                     else{
//                         state.companiesSelected.push({state.company[id].id,state.company[id].image_link});
//                     }

//                 }

//         }),),
//     }),
//     {
//         name: 'SA-app',
//         storage: createJSONStorage(() => AsyncStorage),
//       },

//   ),
  
    
// );



import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import imageCompany from '../Data';
import imageCategory from '../CategoryData';

export const useStore = create(
  persist(
    (set, get) => ({
      company: imageCompany,
      companiesSelected: [],
      manipuleCompaniesSelected: (index: number) =>
        set(
          produce((state) => {

             // Recherche l'index de l'élément dans tab1

            const find = state.companiesSelected[index]!==null;
            if(find){
              state.companiesSelected.splice(index, 1);
              console.log(`L'élément avec l'id ${index} a été supprimé de tab1.`);
            }else{
                 // Sinon, trouver l'élément dans tab et l'ajouter à tab1
                 const element = state.company[index];
                 if (element) {
                 state.companiesSelected.push(element);
                 console.log(`L'élément avec l'id ${index} a été ajouté à tab1.`);
                 } else {
                 console.log(`Aucun élément avec l'id ${index} n'a été trouvé dans tab.`);
                 }
            }
 


            // for (let i = 0; i < state.companiesSelected.length; i++) {
            //   if (state.companiesSelected[i].id === id) {
            //     state.companiesSelected.splice(i, 1);
            //     //return; // Exit the function early if an item is removed
            //   }
              
            // }
            // // If the item was not found, add it to the list
            // const selectedCompany = state.company.find((company:any) => company.id === id);///////////////////////////looooooooooooook
            // if (selectedCompany) {
            //   state.companiesSelected.push({ id: selectedCompany.id, image_link: selectedCompany.image_link });
            // }

            // state.companiesSelected.push({id:state.company[id].id,image_link:state.company[id].image_link})
          })
        ),

      
      companiesNotSelected: [], 
      updateCompaniesNotSelected: () =>
        set(
          produce((state) => {
            // state.companiesNotSelected = state.company.filter(
            //   (element:any) => state.companiesSelected.indexOf(element) === -1
            state.companiesNotSelected = state.company.filter(
              (company:any) => !state.companiesSelected.some((selected:any) => selected.id === company.id)
          
            );
          })
          ),
          
          
      manipulateCompaniesNotSelected:(id:number)=>
        set(produce((state)=>{

          
          })
        ),


      Category:imageCategory,
    }),
    {
      name: 'SA-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
