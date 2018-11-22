import { createLocalVue, mount } from '@vue/test-utils'
import InputBar from "@/components/InputBar.vue"
import { 
  Button, 
  Input,
} from 'element-ui/lib'



describe("InputBar", () => {

  const localVue = createLocalVue();
  localVue.use(Button)
  localVue.use(Input)

  test("has only 1 input element", () => {

    const wrapper = mount(InputBar, { localVue });
    expect(wrapper.findAll(Input).length).toBe(1)
  });

  test("has only 1 button element", () => {

    const wrapper = mount(InputBar, { localVue });
    expect(wrapper.findAll(Button).length).toBe(1)
  });


  test("shows placeholder in input when props.placeholder is passed", () => {

    let placeholder = "hello there";
    const wrapper = mount(InputBar, {
      localVue,
      propsData:{ placeholder }
    });

    expect(wrapper.find("input").element.placeholder).toBe(placeholder)
  });

  test("changes inputValue base on user's input", () => {

    let userValue = "Do something";
    const wrapper = mount(InputBar, { localVue });
    const inputWrapper = wrapper.find("input");
    inputWrapper.element.value = userValue;
    inputWrapper.trigger("input");

    expect(wrapper.vm.inputValue).toBe(userValue)
  });

  test("emits input value when button is clicked", () => {

    let inputValue = "Do something"
    const wrapper = mount(InputBar, { localVue, sync: false });

    wrapper.setData({ inputValue })
    wrapper.find(Button).trigger("click");

    localVue.nextTick(()=>{
      expect( wrapper.find(Button).element.disabled).toBe(false);
      expect(wrapper.emitted("btn-click")).toBeTruthy()
      expect(wrapper.emitted("btn-click")[0]).toEqual([inputValue])
    })

  });

})

