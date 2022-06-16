
    
var contact = new ContactDto();
contact.gender = 'Male';
contact.surname = 'Thomas';
contact.givenName = 'Alex';
contact.emailAddresses = [new EmailAddress(
    new EnumWithCustomOfEmailAddressCategory('Work'),
    'Alex Thomas', true, undefined, 'alex.thomas@work.com')];
contact.phoneNumbers = [new PhoneNumber(
    new EnumWithCustomOfPhoneNumberCategory('Work'),
    '+49211424721', true)];

var storage = 'First storage';
var folder = 'path/to/folder/on/storage';
var contactFile = 'contact.vcf';
await api.contact.save(
    new ContactSaveRequest(
        new StorageFileLocation(storage, folder, contactFile),
        contact, 'VCard'));
