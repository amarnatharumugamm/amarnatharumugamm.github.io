(window.webpackJsonpVetsline=window.webpackJsonpVetsline||[]).push([[33],{430:function(e,t,a){"use strict";a.r(t);var l=a(45),n=a(0),c=a.n(n),r=a(184),s=a(188),m=a(36),u=a(49);t.default=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),E=a[0],i=a[1];Object(n.useEffect)((function(){e(Object(u.F)())}),[]);var d=Object(m.c)((function(e){return e.listwhatsuplink.payload}));return c.a.createElement("div",null,c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"WhatsApp"),c.a.createElement("p",{className:"card-description"}," Add "),c.a.createElement("form",{className:"forms-sample",onSubmit:function(t){t.preventDefault(),e(Object(u.j)({link:E}))}},c.a.createElement(r.a.Group,null,c.a.createElement("label",{htmlFor:"exampleInputName1"},"Whatsup Link"),c.a.createElement(r.a.Control,{type:"text",className:"form-control",id:"exampleInputName1",name:"link",onChange:function(e){return i(e.target.value)},placeholder:"Enter Link",required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mr-2"},"Submit")),c.a.createElement("p",{className:"card-description mt-3"}," List "),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," S No "),c.a.createElement("th",null," Link "),c.a.createElement("th",null," status "),c.a.createElement("th",null," Actions "))),c.a.createElement("tbody",null,Array.isArray(d)?d.map((function(t,a){return c.a.createElement("tr",null,c.a.createElement("td",null," ",a+1),c.a.createElement("td",null," ",t.link," "),"INACTIVE"===t.status?c.a.createElement("td",null,c.a.createElement("span",{className:"badge badge-danger"},t.status)):c.a.createElement("td",null,c.a.createElement("span",{className:"badge badge-success"},t.status)),c.a.createElement("td",null,c.a.createElement("select",{class:"custom-select",onChange:function(a){switch(a.target.value){case"ACTIVE":e(Object(u.v)({id:t.id+"",status:"ACTIVE"}));break;case"DEACTIVE":e(Object(u.v)({id:t.id+"",status:"DEACTIVE"}));break;case"DELETE":e(Object(u.v)({id:t.id+"",status:"DELETE"}))}a.target.value="update_status"}},c.a.createElement("option",{value:"update_status"},"Update Status"),c.a.createElement("option",{value:"ACTIVE"},"ACTIVE"),c.a.createElement("option",{value:"DEACTIVE"},"INACTIVE"),c.a.createElement("option",{value:"DELETE"},"DELETE"))))})):c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,style:{textAlign:"center",fontWeight:"bold"}},c.a.createElement(s.a,{className:"p-3",variant:"danger"}," ","No Data Found"," "))))))))))}}}]);
//# sourceMappingURL=33.835e212b.chunk.js.map