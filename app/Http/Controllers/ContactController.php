<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
class ContactController extends Controller
{
    public function index(){
        $data = contact::all();
        return Inertia::render('App')->with('data', $data)->withViewData(['preserveState' => true]);;
    }


    public function newContact() {
        return Inertia::render('NewContact');
    }
    public function addContact(Request $req) {
        $this->validate($req, [
            'name' => 'required|max:40',
            'daerah_asal' => 'required|max:40',
            'no_telpon' => 'required|min:10|max:12',
        ]);


        contact::create([
            'name' => $req->input('name'),
            'daerah_asal' => $req->input('daerah_asal'),
            'no_telpon' => $req->input('no_telpon'),
        ]);
        return to_route('contact');

    }

    public function viewContact($id) {
        $data = contact::find($id);
        return Inertia::render('EditContact')->with('data',$data);
    }

    public function editContact(Request $req, $id) {
        $this->validate($req, [
            'name' => 'required|min:4|max:40',
            'daerah_asal' => 'required|max:40',
            'no_telpon' => 'required|min:10|max:12',
        ]);

        $npm = $req->input('npm', '-');

        $data = contact::find($id);

        $data->update([
            'name' => $req->input('name'),
            'daerah_asal' => $req->input('daerah_asal'),
            'no_telpon' => $req->input('no_telpon'),
        ]);
        return to_route('contact');

    }

    public function deleteContact(Request $req, $id) {
        $data = contact::find($id);
        $data->delete();
        // DB::table('contacts')->truncate();
        return to_route('contact');

    }


}
