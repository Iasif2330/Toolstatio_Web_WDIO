export default class Selector{

    //-----------------------------------------------------
    id(id)
    {
        return $("#"+id);
    }
    //-----------------------------------------------------
    class(name)
    {
        return $("."+name);
    }
    //-----------------------------------------------------
    $(selector)
    {
        return $(selector);
    }
    //-----------------------------------------------------
    child(parent, child)
    {
        return $(parent).$$(child);
    }
    //-----------------------------------------------------
    attr(attribute, value)
    {
        return $('['+attribute+'="'+value+'"]');
    }
    //-----------------------------------------------------
    name(name,value=null)
    {
        let el = this.attr('name', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    wdio(name,value=null)
    {
        let el = this.attr('data-wdio', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    dusk(name,value=null)
    {
        let el = this.attr('dusk', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    role(name)
    {
        return this.attr('role', name);
    }
    //-----------------------------------------------------
    testid(name,value=null)
    {
        let el = this.attr('data-testid', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }

    async testIds(name) {
        return await $$(`//*[@data-testid='${name}']`);
    }
    
    async testIdStartsWith(name) {
        return await $(`(//*[starts-with(@data-testid, '${name}')])[1]`);
    }
    
    async testIdsStartsWith(name) {
        return await $$(`//*[starts-with(@data-testid, '${name}')]`);
    }
    
    async testIdEndsWith(name) {
        return await $(`(//*[substring(@data-testid, string-length(@data-testid) - string-length('${name}') + 1) = '${name}'])[1]`);
    }
    
    async testIdsEndsWith(name) {
        return await $$(`//*[substring(@data-testid, string-length(@data-testid) - string-length('${name}') + 1) = '${name}']`);
    }
    
    async testIdContains(name) {
        return await $(`(//*[contains(@data-testid, '${name}')])[1]`);
    }
    
    async testIdsContains(name) {
        return await $$(`//*[contains(@data-testid, '${name}')]`);
    }
    
    async testIdStartsWithAndEndsWith(startPart, endPart) {
        return await $(`(//*[starts-with(@data-testid, '${startPart}') and substring(@data-testid, string-length(@data-testid) - string-length('${endPart}') + 1) = '${endPart}']])[1]`);
    }
    
    async testIdsStartsWithAndEndsWith(startPart, endPart) {
        return await $$(`//*[starts-with(@data-testid, '${startPart}') and substring(@data-testid, string-length(@data-testid) - string-length('${endPart}') + 1) = '${endPart}']]`);
    }                              
    //-----------------------------------------------------
    arialabel(name, value=null)
    {
        let el = this.attr('aria-label', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    for(name){
        let el = this.attr('for', name);
        return el;
    }
    placeholder(name, options = {}) {
        const { value = null, multiple = false } = options;
        let elements = multiple ? $$(`[placeholder="${name}"]`) : $(`[placeholder="${name}"]`);

        if (!multiple && value !== null) {
            elements.setValue(value);
        }
        return elements;
    }
    title(name, value=null){
        let el = this.attr('title', name);
        return el;
    }
    href(name, value=null){
        let el = this.attr('href', name);
        return el;
    }
    value(name, value=null){
        let el = this.attr('value', name);
        return el;
    }
    //-----------------------------------------------------
}