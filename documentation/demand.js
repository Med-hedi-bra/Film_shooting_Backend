/**
 * @swagger
 * tags:
 *   name: Demands Route
 *   description: API operations for managing demands
 */

/**
 * @swagger
 * /demand:
 *   get:
 *     summary: Get all demands
 *     tags:
 *       - Demands Route
 *     description: This API for getting all demands
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *          $ref: '#/definitions/DemandResponse'
 *           
 *          
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * 
 *
 *   post:
 *     summary: Add new Demand
 *     tags:
 *       - Demands Route
 *     description: This API is for adding a new demand
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: demand
 *         schema:
 *           $ref: '#/definitions/DemandRequest'
 *     responses:
 *       '201':
 *         description: Demand created with success
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * 
 * /demand/{id}:
 *   get:
 *     summary: Get demand by id
 *     tags:
 *       - Demands Route
 *     description: This API for getting  demand by id
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *          $ref: '#/definitions/DemandResponse'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * 
 *   put:
 *     summary: Update demand by id
 *     tags:
 *       - Demands Route
 *     description: This API for updating  demand by id
 *     parameters:
 *       - in: body
 *         name: demand
 *         schema:
 *           $ref: '#/definitions/DemandResponse'
 *     produces:
 *       - application/json
 *     responses:
 *       '205':
 *         description: Demand updated with success
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * 
 *   delete:
 *     summary: Delete demand by id
 *     tags:
 *       - Demands Route
 *     description: This API for deleting  demand by id
 *     produces:
 *       - application/json
 *     responses:
 *       '206':
 *         description: Demand deleted with success
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * /demand/user/{idUser}:
 *   get:
 *     summary: Get demand by User
 *     tags:
 *       - Demands Route
 *     description: This API for getting  demand by User
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *          $ref: '#/definitions/DemandResponse'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */






/**
 * @swagger
 * definitions:
 *     DemandRequest:
 *       type: object
 *       properties:
 *         idUser:
 *           type: integer
 *           description: The user ID.
 *         fonctionEtrangere:
 *           type: string
 *           description: The foreign function.
 *         nationaliteEtrangere:
 *           type: string
 *           description: The foreign nationality.
 *         prenomEtrangere:
 *           type: string
 *           description: The foreign first name.
 *         nomEtrangere:
 *           type: string
 *           description: The foreign last name.
 *         prestationArmee:
 *           type: string
 *           description: The military service.
 *         nbrArmee:
 *           type: integer
 *           description: The number of military service.
 *         dateArmeeFinish:
 *           type: string
 *           description: The finish date of military service.
 *         dateArmeeStart:
 *           type: string
 *           description: The start date of military service.
 *         lieuxArmee:
 *           type: string
 *           description: The location of military service.
 *         selectedArmee:
 *           type: string
 *           description: The selected military service.
 *         prestationProtection:
 *           type: string
 *           description: The protection service.
 *         nbrProtection:
 *           type: integer
 *           description: The number of protection service.
 *         dateProtectionFinish:
 *           type: string
 *           description: The finish date of protection service.
 *         dateProtectionStart:
 *           type: string
 *           description: The start date of protection service.
 *         lieuxProtection:
 *           type: string
 *           description: The location of protection service.
 *         selectedProtection:
 *           type: string
 *           description: The selected protection service.
 *         prestationPolice:
 *           type: string
 *           description: The police service.
 *         nbrPolice:
 *           type: integer
 *           description: The number of police service.
 *         datePoliceFinish:
 *           type: string
 *           description: The finish date of police service.
 *         datePoliceStart:
 *           type: string
 *           description: The start date of police service.
 *         lieuxPolice:
 *           type: string
 *           description: The location of police service.
 *         selectedPolice:
 *           type: string
 *           description: The selected police service.
 *         dateBatimentFinish:
 *           type: string
 *           description: The finish date of building service.
 *         dateBatimentStart:
 *           type: string
 *           description: The start date of building service.
 *         lieuxBatiment:
 *           type: string
 *           description: The location of building service.
 *         selectedBatiment:
 *           type: string
 *           description: The selected building service.
 *         dateHistoriqueFinish:
 *           type: string
 *           description: The finish date of historical service.
 *         dateHistoriqueStart:
 *           type: string
 *           description: The start date of historical service.
 *         lieuxHistorique:
 *           type: string
 *           description: The location of historical service.
 *         selectedHistorique:
 *           type: string
 *           description: The selected historical service.
 *         dateAerienFinish:
 *           type: string
 *           description: The finish date of aerial service.
 *         dateAerienStart:
 *           type: string
 *           description: The start date of aerial service.
 *         selectedAerien:
 *           type: string
 *           description: The selected aerial service.
 *         lieuxAerien:
 *           type: string
 *           description: The location of aerial service.
 *         dateMaritimeFinish:
 *           type: string
 *           description: The finish date of maritime service.
 *         dateMaritimeStart:
 *           type: string
 *           description: The start date of maritime service.
 *         selectedMaritime:
 *           type: string
 *           description: The selected maritime service.
 *         lieuxMaritime:
 *           type: string
 *           description: The location of maritime service.
 *         dateRoutierFinish:
 *           type: string
 *           description: The finish date of road service.
 *         dateRoutierStart:
 *           type: string
 *           description: The start date of road service.
 *         selectedRoutier:
 *           type: string
 *           description: The selected road service.
 *         lieuxRoutier:
 *           type: string
 *           description: The location of road service.
 *         dateMaritimeTFinish:
 *           type: string
 *           description: The finish date of maritime transportation service.
 *         dateMaritimeTStart:
 *           type: string
 *           description: The start date of maritime transportation service.
 *         lieuxMaritimeT:
 *           type: string
 *           description: The location of maritime transportation service.
 *         selectedMaritimeT:
 *           type: string
 *           description: The selected maritime transportation service.
 *         budget:
 *           type: integer
 *           description: The budget.
 *         autrePrestation:
 *           type: string
 *           description: Another service.
 *         selectedTournageType:
 *           type: string
 *           description: The selected filming type.
 *         autreType:
 *           type: string
 *           description: Another type.
 *         scenarioFile:
 *           type: string
 *           description: The scenario file.
 *         decoupageTechniqueFile:
 *           type: string
 *           description: The technical breakdown file.
 *         synopsisFile:
 *           type: string
 *           description: The synopsis file.
 *         contratTravailFile:
 *           type: array
 *           items:
 *             type: string
 *           description: The employment contract file(s).
 *         droitDauteurFile:
 *           type: string
 *           description: The copyright file.
 *         contratCoproductionFile:
 *           type: string
 *           description: The co-production contract file.
 *         assuranceFile:
 *           type: string
 *           description: The insurance file.
 *         budgetPreFile:
 *           type: string
 *           description: The pre-budget file.
 *         listeTechFile:
 *           type: string
 *           description: The technical list file.
 *         calendrierFile:
 *           type: string
 *           description: The calendar file.
 * 
 * 
 * 
 *     DemandResponse:
 *       type: object
 *       properties:
 *         idUser:
 *           type: integer
 *           description: The user ID.
 *         idDemand:
 *           type: integer
 *           description: The demand ID.
 *         dateCreation:
 *           type: string
 *           description: The creation date.
 *         fonctionEtrangere:
 *           type: string
 *           description: The foreign function.
 *         nationaliteEtrangere:
 *           type: string
 *           description: The foreign nationality.
 *         prenomEtrangere:
 *           type: string
 *           description: The foreign first name.
 *         nomEtrangere:
 *           type: string
 *           description: The foreign last name.
 *         prestationArmee:
 *           type: string
 *           description: The military service.
 *         nbrArmee:
 *           type: integer
 *           description: The number of military service.
 *         dateArmeeFinish:
 *           type: string
 *           description: The finish date of military service.
 *         dateArmeeStart:
 *           type: string
 *           description: The start date of military service.
 *         lieuxArmee:
 *           type: string
 *           description: The location of military service.
 *         selectedArmee:
 *           type: string
 *           description: The selected military service.
 *         prestationProtection:
 *           type: string
 *           description: The protection service.
 *         nbrProtection:
 *           type: integer
 *           description: The number of protection service.
 *         dateProtectionFinish:
 *           type: string
 *           description: The finish date of protection service.
 *         dateProtectionStart:
 *           type: string
 *           description: The start date of protection service.
 *         lieuxProtection:
 *           type: string
 *           description: The location of protection service.
 *         selectedProtection:
 *           type: string
 *           description: The selected protection service.
 *         prestationPolice:
 *           type: string
 *           description: The police service.
 *         nbrPolice:
 *           type: integer
 *           description: The number of police service.
 *         datePoliceFinish:
 *           type: string
 *           description: The finish date of police service.
 *         datePoliceStart:
 *           type: string
 *           description: The start date of police service.
 *         lieuxPolice:
 *           type: string
 *           description: The location of police service.
 *         selectedPolice:
 *           type: string
 *           description: The selected police service.
 *         dateBatimentFinish:
 *           type: string
 *           description: The finish date of building service.
 *         dateBatimentStart:
 *           type: string
 *           description: The start date of building service.
 *         lieuxBatiment:
 *           type: string
 *           description: The location of building service.
 *         selectedBatiment:
 *           type: string
 *           description: The selected building service.
 *         dateHistoriqueFinish:
 *           type: string
 *           description: The finish date of historical service.
 *         dateHistoriqueStart:
 *           type: string
 *           description: The start date of historical service.
 *         lieuxHistorique:
 *           type: string
 *           description: The location of historical service.
 *         selectedHistorique:
 *           type: string
 *           description: The selected historical service.
 *         dateAerienFinish:
 *           type: string
 *           description: The finish date of aerial service.
 *         dateAerienStart:
 *           type: string
 *           description: The start date of aerial service.
 *         selectedAerien:
 *           type: string
 *           description: The selected aerial service.
 *         lieuxAerien:
 *           type: string
 *           description: The location of aerial service.
 *         dateMaritimeFinish:
 *           type: string
 *           description: The finish date of maritime service.
 *         dateMaritimeStart:
 *           type: string
 *           description: The start date of maritime service.
 *         selectedMaritime:
 *           type: string
 *           description: The selected maritime service.
 *         lieuxMaritime:
 *           type: string
 *           description: The location of maritime service.
 *         dateRoutierFinish:
 *           type: string
 *           description: The finish date of road service.
 *         dateRoutierStart:
 *           type: string
 *           description: The start date of road service.
 *         selectedRoutier:
 *           type: string
 *           description: The selected road service.
 *         lieuxRoutier:
 *           type: string
 *           description: The location of road service.
 *         dateMaritimeTFinish:
 *           type: string
 *           description: The finish date of maritime transportation service.
 *         dateMaritimeTStart:
 *           type: string
 *           description: The start date of maritime transportation service.
 *         lieuxMaritimeT:
 *           type: string
 *           description: The location of maritime transportation service.
 *         selectedMaritimeT:
 *           type: string
 *           description: The selected maritime transportation service.
 *         budget:
 *           type: integer
 *           description: The budget.
 *         autrePrestation:
 *           type: string
 *           description: Another service.
 *         selectedTournageType:
 *           type: string
 *           description: The selected filming type.
 *         autreType:
 *           type: string
 *           description: Another type.
 *         scenarioFile:
 *           type: string
 *           description: The scenario file.
 *         decoupageTechniqueFile:
 *           type: string
 *           description: The technical breakdown file.
 *         synopsisFile:
 *           type: string
 *           description: The synopsis file.
 *         contratTravailFile:
 *           type: array
 *           items:
 *             type: string
 *           description: The employment contract file(s).
 *         droitDauteurFile:
 *           type: string
 *           description: The copyright file.
 *         contratCoproductionFile:
 *           type: string
 *           description: The co-production contract file.
 *         assuranceFile:
 *           type: string
 *           description: The insurance file.
 *         budgetPreFile:
 *           type: string
 *           description: The pre-budget file.
 *         listeTechFile:
 *           type: string
 *           description: The technical list file.
 *         calendrierFile:
 *           type: string
 *           description: The calendar file.
 */



