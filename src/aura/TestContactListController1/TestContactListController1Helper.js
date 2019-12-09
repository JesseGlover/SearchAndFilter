/**
 * Created by gamedevmadeeasy on 12/9/19.
 */

({
    loadList : function (component, event, helper) {
        const action = component.get("c.allContacts");
        const nameFilterString = component.find("nameFilter").get("v.value");
        action.setParams({nameFilterString: nameFilterString});
        action.setCallback(this, function (a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
});