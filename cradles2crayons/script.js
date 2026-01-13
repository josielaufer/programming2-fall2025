function volunteerChoice() {
    
    let choice= ""

    let community = document.getElementById("community");
    let factory = document.getElementById("factory");
    let company = document.getElementById("company");
    let family = document.getElementById("family");
    let corps = document.getElementById("corps");

    if (factory.checked) {
        choice="Volunteer in the giving factory. A volunteer shift at Cradles to Crayons connects you to new and gently used donations that you will quality check, sort, package, and prepare to go to kids in our communities through our incredible network of Service Partners. The Giving Factory activities are broken up into specific stations, each one part of the larger “Quality = Dignity”."
        
    }   


    else if (community.checked) {
        choice="Volunteer in your community. Hosting a Community Drive event is an enjoyable and productive way for supporters to see the Cradles to Crayons mission and model at work firsthand. The first step is to come together as a community to collect donations at multiple locations.  "
        
       
    }   

   
    else if(company.checked) {
        choice="Volunteer with your company. The Giving Factory at Cradles to Crayons, which accommodates groups of 80 employees or more, is especially suited for corporate volunteering and team-building programs. "
        
        
    }   

    
    else if(family.checked) {
        choice="Volunteer with your family. The Giving Factory in Chicago is one of the few places where entire families can volunteer side-by-side making lasting family memories as they help make a real difference in the lives of others. "
        
        
    }   

    
    else if(corps.checked) {
        choice="Join the giving corps. Cradles 2 Crayons has two corps for you to join: Teen Leadership Corps (TLC) and the Champion Corps."
        
        
    }   

    else {
        alert("There was an error. Reload, click one of the options and try again.")

    }


    
    document.getElementById("choice").innerText = choice;
    


}