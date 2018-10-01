define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxMainSlidingMenu **/
    AS_FlexContainer_h3185d7a0a644d3cab78484054d42a48: function AS_FlexContainer_h3185d7a0a644d3cab78484054d42a48(eventobject) {
        var self = this;
        var t = '';
    },
    /** onClick defined for flxHamParent **/
    AS_FlexContainer_a0c6b813a673402f88682f460f56eeb4: function AS_FlexContainer_a0c6b813a673402f88682f460f56eeb4(eventobject) {
        var self = this;
        this.showSlidingMenu();
    },
    /** onClick defined for flxCover **/
    AS_FlexContainer_fec3d0efa79a450489632cf6dbe3fafe: function AS_FlexContainer_fec3d0efa79a450489632cf6dbe3fafe(eventobject) {
        var self = this;
    },
    /** preShow defined for slidingmenu **/
    AS_FlexContainer_cd6d628f111e429f99ec585ea3665a37: function AS_FlexContainer_cd6d628f111e429f99ec585ea3665a37(eventobject) {
        var self = this;
        var newdata = this.modifyDataFromDataGrid(this._suboptions, this._options);
        this.addMenuItems(newdata);
    }
});