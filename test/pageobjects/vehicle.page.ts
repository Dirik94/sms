class VehiclePage {
  private getTestId(id: string) {
    return `[data-testid="${id}"]`;
  }

  private get nameInput() {
    return $(this.getTestId('name-input'));
  }
  private get modelSelect() {
    return $(this.getTestId('name-model-select'));
  }
  private get yearInput() {
    return $(this.getTestId('name-year-input'));
  }

  private get colorSelect() {
    return $(this.getTestId('vehColor-select'));
  }
  private get cloneButton() {
    return $(this.getTestId('cloned-vehicle-button'));
  }

  private get clonedNameInput() {
    return $(this.getTestId('cloned-name-input'));
  }
  private get clonedModelSelect() {
    return $(this.getTestId('cloned-model-select'));
  }
  private get clonedYearInput() {
    return $(this.getTestId('cloned-year-input'));
  }
  private get clonedColorInput() {
    return $(this.getTestId('cloned-color-input'));
  }

  async fillVehicleData(name: string, model: string, year: string) {
    await this.nameInput.setValue(name);
    await this.modelSelect.selectByVisibleText(model);
    await this.yearInput.setValue(year);
  }

  async selectColor(color: string) {
    await this.colorSelect.selectByVisibleText(color);
  }

  async changeModel(model: string) {
    await this.modelSelect.selectByVisibleText(model);
  }

  async cloneVehicle() {
    await this.cloneButton.click();
  }

  async getClonedVehicleData() {
    return {
      name: await this.clonedNameInput.getValue(),
      model: await this.clonedModelSelect.getValue(),
      year: await this.clonedYearInput.getValue(),
      color: await this.clonedColorInput.getValue(),
    };
  }
}

export default new VehiclePage();
