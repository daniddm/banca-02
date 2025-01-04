import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
    movementList: apiModel.Movement | apiModel.Movement[]
): viewModel.MovementVm[] => {
    // If single object, wrap in array
    const movements = Array.isArray(movementList) ? movementList : [movementList];
    
    return movements.map((movement) => ({
        id: movement.id,
        transaction: new Date(movement.transaction),
        realTransaction: new Date(movement.realTransaction),
        description: movement.description,
        amount: movement.amount.toString(),
        balance: movement.balance.toString(),
        accountId: movement.accountId,
    }));
};