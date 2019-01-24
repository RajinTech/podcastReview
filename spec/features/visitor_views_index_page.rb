feature "visitor sees a list of podcasts:" do
  scenario "sees a list of podcasts and their creators" do
    FactoryBot.create(:podcast)
    FactoryBot.create(:podcast)

    visit podcasts_path

    expect(page).to have_content "Cool Podcast 1"
    expect(page).to have_content "Tyler 1"
    expect(page).to have_content "Cool Podcast 2"
  end
end
