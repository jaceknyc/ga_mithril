// src/views/UserForm.js
var m = require("mithril");

var ArcherDetails = require("../Model/ArcherDetails");
var DistanceSelect = require("./Helpers/DistanceSelect.js");

var set_value = function(value, current_value) {
  return {value : value, selected : current_value == value};
}

var discipline_select = {
    view: function(vnode) {
        return m("select", {onchange: vnode.attrs.onchange},
                  [ m("option", {value: "", disabled: 'disabled', selected: !vnode.attrs.value}, "Select Discipline"),
                    m("option", set_value("Compound", vnode.attrs.value), "Compound"),
                    m("option", set_value("Recurve", vnode.attrs.value), "Recurve"),
                    m("option", set_value("Barebow", vnode.attrs.value), "Barebow") ])
    }
}

var day_select = {
    view: function(vnode) {
        return m("select", {onchange: vnode.attrs.onchange},
                  [ m("option", {value: "", disabled: 'disabled', selected: !vnode.attrs.value}, "Select Day"),
                    m("option", set_value("Sunday", vnode.attrs.value), "Sunday"),
                    m("option", set_value("Monday", vnode.attrs.value), "Monday"),
                    m("option", set_value("Tuesday", vnode.attrs.value), "Tuesday"),
                    m("option", set_value("Wednesday", vnode.attrs.value), "Wednesday"),
                    m("option", set_value("Thursday", vnode.attrs.value), "Thursday"),
                    m("option", set_value("Friday", vnode.attrs.value), "Friday"),
                    m("option", set_value("Saturday", vnode.attrs.value), "Saturday"),
                    m("option", set_value("Suspended", vnode.attrs.value), "Suspended") ])
    }
}

module.exports = {
    oninit: function(vnode) { ArcherDetails.load(vnode.attrs.key); },
    view: function() {
        return m("form", {
          onsubmit: function(e) {
              ArcherDetails.save();
          }
      }, [
            m("h1", ArcherDetails.current.firstname + " "
                    + ArcherDetails.current.lastname
                    + " (" + ArcherDetails.current.id + ")"),
            m(discipline_select, {
                onchange: m.withAttr("value", function(value) {ArcherDetails.current.discipline = value}),
                value: ArcherDetails.current.discipline
            }),
            m("label.label", "Owns Equipment?"),
            m("input[type=checkbox]", {
                onchange: m.withAttr("checked", function(checked) {ArcherDetails.current.owns_equipment = checked}),
                checked: ArcherDetails.current.owns_equipment || ""
            }),
            m("label.label", "Draw Weight"),
            m("input[type=number]",  {
                oninput: m.withAttr("value", function(value) {ArcherDetails.current.draw_weight = value}),
                value: ArcherDetails.current.draw_weight || ""
            }),
            m("label.label", "Draw Length"),
            m("input[type=number]",  {
                oninput: m.withAttr("value", function(value) {ArcherDetails.current.draw_length = value}),
                value: ArcherDetails.current.draw_length || ""
            }),
            m("label.label", "Equipment Description"),
            m("textarea",  {
                oninput: m.withAttr("value", function(value) {ArcherDetails.current.equipment_description = value}),
                value: ArcherDetails.current.equipment_description || ""
            }),
            m(DistanceSelect, {
                onchange: m.withAttr("value", function(value) {ArcherDetails.current.distance = value}),
                value: ArcherDetails.current.distance
            }),
            m(day_select, {
                onchange: m.withAttr("value", function(value) {ArcherDetails.current.joad_day= value}),
                value: ArcherDetails.current.joad_day
            }),
            m("button[type=submit]", "Edit Archer Details")
        ]);
    }
}
