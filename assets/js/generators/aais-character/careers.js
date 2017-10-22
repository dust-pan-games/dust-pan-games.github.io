function generateCareers()
{
    for(var i = 0; i < character.careerCount; i++)
    {
        var careerNumber = Math.floor(Math.random() * CAREERS.length);
        var career = new aaisCareer();
        var careerReference = CAREERS[careerNumber];
        career.name = careerReference.name;
        career.description  = careerReference.description;

        if(careerReference.attribute != "")
        {
            career.attribute = careerReference.attribute;
        }

        if(careerReference.specialty.length > 1)
        {
            var specialty = Math.floor(Math.random() * careerReference.specialty.length);
            var careerSpecialty = new aaisCareer();
            careerSpecialty.name = careerReference.specialty[specialty].name;
            careerSpecialty.description = careerReference.specialty[specialty].description;
            career.specialty = careerSpecialty;

            if(careerSpecialty.attribute != "")
            {
                career.attribute = careerSpecialty.attribute;
            }
        }

        character.careers.push(career);
    }
}
